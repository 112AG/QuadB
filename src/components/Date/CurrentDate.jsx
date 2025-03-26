const CurrentDate = () => {
    const today = new Date().toDateString();
  
    return <p className="text-[14px] font-semibold text-green-600">Today's Date: {today}</p>;
  };
  
  export default CurrentDate;
  