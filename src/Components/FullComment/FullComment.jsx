import axios from 'axios';
import { useEffect, useState } from 'react';

const FullComment = ({ commentID }) => {
  const [comment, setComment] = useState(null);
  if (!commentID)
    return (
      <p className='bg-gray-200 px-8 py-2 w-1/2 text-center rounded-md font-semibold'>
        Please select a comment
      </p>
    );

  useEffect(() => {
    if (commentID) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments?id=${commentID}`)
        .then((res) => setComment(res.data))
        .catch((error) => console.log(error));
    }
  }, [commentID]);

  return (
    <div className='bg-indigo-200 rounded-lg flex flex-col items-center gap-y-2 w-2/3'>
      <p className='px-4 py-2'>{comment.name} </p>
      <p className='px-4 py-2'>{comment.email} </p>
      <p className='px-4 py-2'>{comment.body}</p>
    </div>
  );
};

export default FullComment;
