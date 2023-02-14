const Comment = () => {
  return (
    <div className='bg-indigo-200 rounded-lg flex flex-col items-center justify-center gap-y-2 w-1/4'>
      <div className='flex items-center justify-between px-4 py-1'>
        <p>Name : </p>
        <p>Test name </p>
      </div>
      <div className='flex items-center justify-between px-4 py-1'>
        <p>Email : </p>
        <p>Test email </p>
      </div>
    </div>
  );
};

export default Comment;
