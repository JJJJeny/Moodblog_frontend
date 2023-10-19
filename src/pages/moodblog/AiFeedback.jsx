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
          <div className='pt-8 pb-4 font-medium text-lg'>日記想對你說 - {formattedDate}</div>
          
          {/* 輸入框 */}
          <div maxLength={300}
            style={{
              width: 800,
              height: 200,
              marginBottom: 18,
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "7px", // Use 'borderRadius' for inline styles
              backgroundColor: "white",
              color: "black" // Specify the text color
            }}>
            This is some content inside the div.
          </div>

          <div className="justify-between items-start self-center flex max-w-full gap-5 mt-12 mb-20 px-5">

                <div className="justify-between self-center flex flex-col w-[89px]">
                    <button className="text-pink-100 font-semibold rounded-lg bg-orange-600/95  hover:bg-amber-600 active:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-600/75" style={{ height: '40px'}}>
                        儲存
                    </button>
                
                </div>
            </div>
  
          
        </div>
      </Layout>
    );
  }
  


