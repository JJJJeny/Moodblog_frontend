// import { Box, Typography } from "@mui/material";




export default function MoodBlogComponent() {
    return (
        <div className="fullscreen" style={{ backgroundColor: "mildwhite" }}>
            <header className="text-center text-4xl self-stretch w-full justify-between items-center bg-zinc-300 pl-5 py-9 max-md:max-w-full">
                MoodBlog
            </header>
            <section className="flex justify-center items-center max-md:max-w-full mt-36 mb-66">
                <div className="items-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold items-center py-6 px-4 rounded">
                        Login
                    </button>
                </div>
            </section>
            <section className="flex justify-center items-center max-md:max-w-full mt-36 mb-66">
                <div >
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold items-center py-6 px-4 rounded">
                        Start
                    </button>
                </div>
            </section>
        </div>
    );
}