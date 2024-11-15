import React from 'react';

type MyComponentProps = {
  // Define your props here
  title: string;
  children: string;
};

const MyComponent: React.FC<MyComponentProps> = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h1 className="text-3xl font-bold underline bg-indigo-200">
    Hello world!
  </h1>

    </div>
  );
};

export default MyComponent;


