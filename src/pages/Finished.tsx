import doneIcon from '../assets/icon-thank-you.svg';

function Finished() {
  return (
    <div className="w-full justify-center flex justify-items-center">
      <div className="flex flex-col justify-center h-2/4 w-3/5 content-center items-center space-y-4">
        <img src={doneIcon} />
        <h1 className="text-2xl font-bold">Thank you!</h1>
        <p className="text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

export default Finished;
