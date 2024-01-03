import { db } from "@/lib/ds";
import { File } from "lucide-react";



const AttachmentPage = async (
    {params}: {params: {courseID: string}}
) => {
    const attachments = await db.attachment.findMany({
        where: {
            courseID: params.courseID
        }
    });

    return (
        <div className="my-10 mx-10">
            <div className="text-4xl font-bold mb-10">Attachments</div>
            {!!attachments.length && (
                <>
                    <div className="p-0">
                        {attachments.map((attachment) => (
                            <a
                                href={attachment.url}
                                target="_blank"
                                key={attachment.id}
                                className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-xl hover:bg-sky-300 dark:bg-blue-900 dark:border-none dark:text-white dark:hover:bg-blue-500"
                            >
                                <File />
                                <p className="line-clamp-1">
                                    {attachment.name}
                                </p>
                            </a>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default AttachmentPage;