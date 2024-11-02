import * as React from 'react';

interface EmailTemplateProps {
  senderName: string;
  senderEmail: string;
  senderMessage: string 
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    senderName, senderEmail, senderMessage
}) => (
  <div>
    
    <h2 className=' text-sm m-2 text-gray-600'>You have a message from your Portfolio. </h2>
    <p className='text-md m-5 text-gray-600 '>{senderMessage}</p>
    <h3 className='text-md text-gray-600'>Sender Email: {senderEmail}</h3>
    <h3 className='text-md text-gray-600 -mt-2'>Sender Name: {senderName}</h3>
  </div>
);
