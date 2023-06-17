import { useState } from "react";
import { Button } from "antd";



export function Post() {
  const [showFull, setShowFull] = useState(false);
  const text = `Một buổi chiều nào đó, phố khẽ khàng uốn mình rũ bỏ hạt nước mưa sau những trận mưa vội vã. 
  Những chiều như thế ai mà đến tìm tôi hoặc xách cuốn vở sang mà hỏi bài là không thấy tôi ở nhà đâu. 
  Tôi loanh quanh trên những con phố nhỏ quen thuộc, phố thẳng tắp và hối hả, phố rộng lượng thổi nhẹ vài
   làn gió mơn trớn làm con tim tôi vui lạ kì`;
  const ouputText = !showFull ? `${text.slice(0, 200)}...` : text;
  return <div className=" p-5 bg-transparent mb-10 text-center border-b-2 border-slate-400">
    <h1 className="font-bold text-xl">Những chiều có mưa</h1>
    <p className="mb-5 text-xs text-right">By Nguyễn Ngọc Huỳnh  at Tuesday, 20/02/2023</p>
    <p className="text-start transition transition-all duration-2000 ease-in-out mb-5 "> {ouputText}</p>
    {
      !showFull ? <Button onClick={() => {setShowFull(true)}}> Show more </Button> : 
      <Button onClick={() => {setShowFull(false)}}> Show less </Button>
    }
  </div>
}