export interface Article {
    title: string;
    description: string;
    image: string;
}

export const CarouselSlideArticle: React.FC<{
    articles: Article[];
    width?: string;
}> = ({ articles, width = '100%' }) => {
    return (
        <>
            {articles.map((article, index) => (
                <div
                    key={index}
                    className={`min-w-0 max-w-[${width}] transform-[translate3d(0, 0, 0)] flex flex-col gap-10 bg-grey-color rounded-[20px] font-medium py-7 px-4 text-center text-[20px]`}
                    style={{ flex: `0 0 ${width}` }}
                >
                    {article.title}
                    <div className="flex items-center gap-4 font-normal text-left text-[16px]">
                        <img src={article.image} alt={article.title} />
                        {article.description}
                    </div>
                </div>
            ))}
        </>
    );
};
