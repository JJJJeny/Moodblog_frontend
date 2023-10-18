// import { Box, Typography } from "@mui/material";
import { Input } from 'antd';
import Layout from "../../partials/dashboard/Layout";

export default function MoodBlogComponent() {
    const { TextArea } = Input;
    const onChange = (e) => {
      console.log('Change:', e.target.value);
    };

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
  
    return (
        <Layout>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* 標題 */}
          <div className='pt-8 pb-4 font-medium text-lg'>撰寫日記 - {formattedDate}</div>
          
          {/* 輸入框 */}
          <TextArea
            showCount
            maxLength={300}
            style={{
              width: 800,
              height: 200,
              marginBottom: 18,
            }}
            onChange={onChange}
            placeholder="今天發生了什麼呢？"
          />
          <div className="justify-between items-start self-center flex w-[228px] max-w-full gap-5 mt-12 mb-20 px-5">
                <div className="self-stretch flex flex-col w-[89px]">
                    <button className="text-pink-100 font-semibold rounded-lg bg-orange-600/95  hover:bg-amber-600 active:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-600/75" style={{ height: '40px'}}>
                        AI聊聊
                    </button>
                </div>
                <div className="self-stretch flex flex-col w-[89px]">
                    <button className="text-pink-100 font-semibold rounded-lg bg-orange-600/95  hover:bg-amber-600 active:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-600/75" style={{ height: '40px'}}>
                        儲存
                    </button>
                
                </div>
            </div>
  
          
        </div>
      </Layout>
    );
  }
  


