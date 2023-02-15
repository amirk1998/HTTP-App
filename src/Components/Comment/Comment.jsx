const Comment = ({ name, email, onClick }) => {
  return (
    <div
      onClick={onClick}
      className='bg-indigo-200 rounded-lg flex flex-col items-center justify-center w-1/4 p-2 cursor-pointer'
    >
      <div className='flex flex-col items-center justify-center px-4 py-1'>
        <p>Name </p>
        <p>{name} </p>
      </div>
      <div className='flex flex-col items-center justify-center px-4 py-1'>
        <p>Email </p>
        <p>{email} </p>
      </div>
    </div>
  );
};

export default Comment;
