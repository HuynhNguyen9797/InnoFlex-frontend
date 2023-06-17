
import { PostMenuDropdown } from "./PostMenuDropDown";



export function Post() {
  const text = `Một buổi chiều nào đó, phố khẽ khàng uốn mình rũ bỏ hạt nước mưa sau những trận mưa vội vã. 
  Những chiều như thế ai mà đến tìm tôi hoặc xách cuốn vở sang mà hỏi bài là không thấy tôi ở nhà đâu. 
  Tôi loanh quanh trên những con phố nhỏ quen thuộc, phố thẳng tắp và hối hả, phố rộng lượng thổi nhẹ vài
   làn gió mơn trớn làm con tim tôi vui lạ kì`;  return <div className=" p-5 bg-white mb-10  rounded-md">
    <div className="flex justify-between">
    <h1 className="font-bold text-xl">Những chiều có mưa</h1>
    < PostMenuDropdown />
    </div>
    <p className="mb-2 mt-5 text-xs italic">By Nguyễn Ngọc Huỳnh  at Tuesday, 20/02/2023</p>
    <p className="text-start mb-5 "> {text}</p>
  </div>
}