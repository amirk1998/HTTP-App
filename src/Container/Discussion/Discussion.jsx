import { useEffect, useState } from 'react';
import Comment from '../../Components/Comment/Comment';
import FullComment from '../../Components/FullComment/FullComment';
import NewComment from '../../Components/NewComment/NewComment';
import axios from 'axios';

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedID, setSelectedID] = useState(null);
  //Comment for FullComment Component
  // const [comment, setComment] = useState(null);
  //
  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/comments')
  //     .then((response) => {
  //       setComments(response.data.slice(0, 3));
  //     })
  //     .catch((error) => {
  //       console.log('Error => ', error);
  //     });
  // }, []);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/comments'
        );
        setComments(data.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);

  // useEffect(() => {
  //   if (selectedID) {
  //     axios
  //       .get(`https://jsonplaceholder.typicode.com/comments?id=${selectedID}`)
  //       .then((res) => {
  //         setComment(res.data);
  //         console.log(res.data);
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // }, [selectedID]);

  const selectCommentHandler = (id) => {
    console.log(id);
    setSelectedID(id);
  };

  return (
    <>
      <section className='flex items-center justify-center w-full border-2 border-gray-400 rounded-lg p-4 my-4 gap-x-20 '>
        {comments ? (
          comments.map((c) => (
            <Comment
              key={c.id}
              name={c.name}
              email={c.email}
              onClick={() => selectCommentHandler(c.id)}
            />
          ))
        ) : (
          <p> Loading ...</p>
        )}
      </section>
      <section className='flex items-center justify-center w-full border-2 border-gray-400 rounded-lg p-4 my-4 '>
        <FullComment commentID={selectedID} />
      </section>
      <section className='flex items-center justify-center w-full border-2 border-gray-400 rounded-lg p-4 my-4 '>
        <NewComment />
      </section>
    </>
  );
};

export default Discussion;
