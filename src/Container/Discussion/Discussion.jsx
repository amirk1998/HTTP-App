import Comment from '../../Components/Comment/Comment';
import FullComment from '../../Components/Comment/FullComment';
import NewComment from '../../Components/NewComment/NewComment';
const Discussion = () => {
  return (
    <>
      <section className='flex items-center justify-center w-full border-2 border-gray-400 rounded-lg p-4 my-4 gap-x-20 '>
        <Comment />
        <Comment />
      </section>
      <section className='flex items-center justify-center w-full border-2 border-gray-400 rounded-lg p-4 my-4 '>
        <FullComment />
      </section>
      <section className='flex items-center justify-center w-full border-2 border-gray-400 rounded-lg p-4 my-4 '>
        <NewComment />
      </section>
    </>
  );
};

export default Discussion;
