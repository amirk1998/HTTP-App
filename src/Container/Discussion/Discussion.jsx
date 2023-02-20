import { useEffect, useState } from 'react';
import Comment from '../../Components/Comment/Comment';
import FullComment from '../../Components/FullComment/FullComment';
import NewComment from '../../Components/NewComment/NewComment';
import axios from 'axios';

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedID, setSelectedID] = useState(null);

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
        const { data } = await axios.get('http://localhost:3001/comments');
        setComments(data);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);

  const selectCommentHandler = (id) => {
    console.log(id);
    setSelectedID(id);
  };

  // const postCommentHandler = (event, comment) => {
  //   event.preventDefault();

  //   axios
  //     .post('http://localhost:3001/comments', { ...comment, postId: 1 })
  //     .then((res) => axios.get('http://localhost:3001/comments'))
  //     .then((res) => setComments(res.data))
  //     .catch((error) => console.log(error));
  // };

  return (
    <>
      <section className='grid grid-cols-3 auto-rows-max items-center justify-center gap-x-20 gap-y-10 border-2 border-gray-400 rounded-lg p-4 my-4  '>
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
        <NewComment setComments={setComments} />
      </section>
    </>
  );
};

export default Discussion;
