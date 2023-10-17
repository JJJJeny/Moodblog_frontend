export default function MoodBlogComponent() {
    return (
        <main className="items-center bg-neutral-400 bg-opacity-50 flex flex-col pr-px">
            <header className="justify-between items-center self-stretch bg-zinc-300 flex flex-col ml-px px-5 py-9 max-md:max-w-full">
                <h1 className="text-black text-center text-4xl self-center w-[1278px] max-w-[1278px] -ml-5 max-md:max-w-full">
                    MoodBlog
                </h1>
            </header>
            <div className="justify-center items-start self-center flex w-[228px] max-w-full gap-5 mt-12 mb-4 px-5">
                <div className="dropdown">
                    <div className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                        Select Date
                        <div className="dropdown-menu">
                            <input type="date" />
                        </div>
                    </div>
                </div>
            </div>
            <section className="justify-center items-center bg-zinc-300 self-center flex w-[812px] max-w-full flex-col mt-12 px-5 py-10 rounded-[40px]">
                <div className="self-center w-[708px] max-w-full my-1.5">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[4%] max-md:w-full">
                            <div className="items-start flex flex-col my-auto max-md:mt-12">
                                {/* <p>button icon</p> */}

                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[96%] ml-5 max-md:w-full">
                            <div className="text-black text-4xl max-w-[581px] max-md:max-w-full max-md:mt-12">
                                Please type something here
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="justify-between items-start self-center flex w-[228px] max-w-full gap-5 mt-12 mb-20 px-5">
                <div className="self-stretch flex flex-col w-[89px]">
                    <a
                        href="#analyze"
                        className="text-black text-lg self-stretch border bg-zinc-300 w-full grow pl-2.5 pr-3.5 pt-3.5 pb-3 rounded-xl border-solid border-zinc-400"
                    >
                        Analyze
                    </a>
                </div>
                <div className="self-stretch flex flex-col w-[89px]">
                    <button
                        type="submit"
                        className="text-black text-lg self-stretch border bg-zinc-300 w-full grow pl-2.5 pr-3.5 pt-3.5 pb-3 rounded-xl border-solid border-zinc-400"
                    >
                        Save
                    </button>
                </div>
            </div>
        </main>
    );
}