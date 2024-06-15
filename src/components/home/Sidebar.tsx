import contextInstance from "@/app/home/Context";
import { Sidebar } from "flowbite-react";
import { useContext } from "react";
import { HiArrowSmRight, HiLockClosed } from "react-icons/hi";

export function SidebarHome() {
    const { chapters, handleItemClick, toggleSubChapter, toggleChapter } = useContext(contextInstance);
  
    return (
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {chapters.map((chapter: any) => (
              chapter.sub_chapters && chapter.sub_chapters.length > 0 ? (
                <Sidebar.Collapse key={chapter.id} icon={HiArrowSmRight} label={chapter.title}>
                  {chapter.sub_chapters.map((subChapter: any) => (
                    <Sidebar.Item
                    
                      key={subChapter.id}
                      onClick={() => {
                        if (subChapter.isFinished) {
                            handleItemClick(subChapter.id)
                        //   toggleSubChapter(chapter.id, subChapter.id);
                        }
                      }}
                    >
                      {subChapter.isFinished ? (
                        <p className={"cursor-pointer"}>{subChapter.title}</p>
                      ) : (
                       <div className="flex items-center gap-2">
                        <p>{subChapter.title}</p>
                         <HiLockClosed />
                       </div>
                      )}
                    </Sidebar.Item>
                  ))}
                </Sidebar.Collapse>
              ) : (
                <Sidebar.Item
                  key={chapter.id}
                  onClick={() => toggleChapter(chapter.id)}
                >
                  {chapter.isFinished ? (
                    <>{chapter.title}</>
                  ) : (
                    <>
                      <HiLockClosed /> {chapter.title}
                    </>
                  )}
                </Sidebar.Item>
              )
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    );
  }