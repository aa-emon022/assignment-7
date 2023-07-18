import React, { useState } from 'react';
import todoImg from '../img/todo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputData.trim() !== '') {
      const id = Date.now();
      setItems([...items, { id, text: inputData, completed: false }]);
      setInputData('');
    }
  };

  const toggleItemCompletion = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const deleteAll = () => {
    setItems([]);
  };

  const listItems = items.filter((item) => !item.completed);
  const completedItems = items.filter((item) => item.completed);

  return (
    <>
      <div className='flex flex-col md:flex-row md:justify-between md:gap-5 '>
        <div className='md:w-[50%]'>
          <div>
            <figure>
            <div className=' ml-[45%] sm:ml-[42%] md:ml-[40%] lg:ml-[40%] xl:ml-[40%]'>
            <img
                className='w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem] md:w-[8rem] md:h-[8rem] lg:w-[10rem] lg:h-[10rem] xl:w-[12rem] xl:h-[12rem]'
                src={todoImg}
                alt='Todo'
              />
            </div>
             <div className=' ml-[32%] sm:ml-[34%] md:ml-[29%] lg:ml-[35%] xl:ml-[39%] mt-[5%] mb-[2%]  bg-[#1b6535] w-[200px] h-[30px]'>
             <h2 className='pl-[30px] text-white'> Add Your List Here 🤔</h2>
             </div>
              
            </figure>
            <div className='flex items-center'>
              <input
                className='flex-1 border border-zinc-600 py-2 px-4 rounded overflow-hidden'
                type='text' 
                placeholder='✍️ Add Item'
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
              />
              <button
                className='ml-2 px-4 py-2 bg-blue-500 text-white rounded'
                onClick={addItem}
              >
                Add
              </button>
            </div>

            <div className='max-h-96 overflow-y-auto p-2'>
              {listItems.map((item) => (
                <div
                  key={item.id}
                  className='flex justify-between gap-[20px] border border-3 border-dotted border-[#D55236] h-[fit-content] my-[10px] whitespace-normal bg-[#ecc19c]'
                >
                  <h1 className='text[#1e847f]'>{item.text}</h1>
                  <div className='flex gap-[10px] pt-[6px] pr-[4px] '>
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => deleteItem(item.id)}
                    />
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      onClick={() => toggleItemCompletion(item.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='ml-[35%] sm:ml-[38%] md:ml-[37%] lg:ml-[40%] xl:ml-[40%]'>
            <button
              className='px-4 py-2 bg-red-500 text-white rounded'
              onClick={deleteAll}
            >
              Remove all
            </button>
          </div>
        </div>
        
        <div className='md:border md:border-3 md:border-cyan-500 md:w-[400px] md:h-[410px] md:mr-[2rem]'>
          <div className='border border-2 bg-gradient-to-r from-violet-500 to-fuchsia-500'>
            <h1 className='ml-[36%] sm:ml-[42%] md:ml-[30%] lg:ml-[32%] xl:ml-[32%] '>Safeguarding Serendipity</h1>
          </div>
          <div className='max-h-96 overflow-y-auto p-2'>
            {completedItems.map((item) => (
              <div
                key={item.id}
                className='flex justify-between gap-[20px] border border-3 border-dotted border-[#D55236] h-[fit-content] my-[15px] whitespace-normal bg-[#f3ca20]'
              >
                <h1 className='text-[#000000]'>{item.text}</h1>
                <div className='flex gap-[10px] pt-[6px] pr-[4px] '>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    onClick={() => toggleItemCompletion(item.id)}
                  />
                  <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => deleteItem(item.id)}
                    />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
