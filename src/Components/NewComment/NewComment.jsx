const NewComment = () => {
  return (
    <form className='bg-indigo-200 rounded-lg flex flex-col items-center gap-y-4 py-2 px-4 w-2/3'>
      <div className='flex items-center justify-start gap-x-4'>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-900 '
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          placeholder='Name'
          className='bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-slate-600 '
        ></input>
      </div>
      <div className='flex items-center justify-start gap-x-4'>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-900 '
        >
          Email
        </label>
        <input
          type='text'
          id='email'
          placeholder='Email'
          className='bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-slate-600 '
        ></input>
      </div>
      <div className='flex items-center justify-start gap-x-4'>
        <label
          htmlFor='content'
          className='block text-sm font-medium text-gray-900 '
        >
          Content
        </label>
        <textarea
          type='textarea'
          id='content'
          placeholder='Content'
          className=' bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[100px] p-2.5 placeholder:text-slate-600 '
          // className='resize-none bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[100px] p-2.5 placeholder:text-slate-600 '
        ></textarea>
      </div>
    </form>
  );
};

export default NewComment;
