const FullComment = () => {
  return (
    <div className='bg-indigo-200 rounded-lg flex flex-col items-center gap-y-2 w-2/3'>
      <div className='flex items-center justify-start px-4 py-2'>
        <p>Name : </p>
        <p>test name </p>
      </div>
      <div className='flex items-center justify-start px-4 py-2'>
        <p>Email : </p>
        <p>test email </p>
      </div>
      <div className='flex items-center justify-start px-4 py-2'>
        <p>Body : </p>
        <p>test body </p>
      </div>
    </div>
  );
};

export default FullComment;
