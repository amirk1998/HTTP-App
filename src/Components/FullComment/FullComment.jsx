import axios from 'axios';
import { useEffect, useState } from 'react';

const FullComment = ({ commentID, setComments, setSelectedID }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentID) {
      axios
        .get(`/comments/${commentID}`)
        .then((res) => {
          setComment(res.data);
          // console.log(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [commentID]);

  const deleteHandler = () => {
    axios
      .delete(`/comments/${commentID}`)
      .then((res) => axios.get('/comments'))
      .then((res) => setComments(res.data))
      .then((res) => {
        setSelectedID(null);
        setComment(null);
      })
      .catch((error) => console.log(error));
  };

  let commentDetail = (
    <p className='bg-indigo-200 text-slate-800 px-8 py-2 w-1/2 text-center rounded-md font-semibold'>
      Please select a comment
    </p>
  );

  if (commentID)
    <p className='bg-indigo-200 text-slate-800 px-8 py-2 w-1/2 text-center rounded-md font-semibold'>
      Loading ...
    </p>;

  if (comment) {
    commentDetail = (
      <div className='bg-indigo-200 text-slate-800 rounded-lg flex flex-col items-center gap-y-2 w-2/3'>
        <p className='px-4 py-2 text-center'>{comment.name} </p>
        <p className='px-4 py-2 text-center'>{comment.email} </p>
        <p className='px-4 py-2 text-center'>{comment.body}</p>
        <button
          onClick={deleteHandler}
          className='flex items-center justify-center bg-slate-100 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 '
        >
          Delete
        </button>
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;
