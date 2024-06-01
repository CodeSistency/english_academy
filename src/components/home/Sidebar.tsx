
"use client";

import contextInstance from "@/app/home/Context";
import { Sidebar } from "flowbite-react";
import { useContext } from "react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";

export function SidebarHome() {
    const {chapters, handleItemClick } = useContext(contextInstance);

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example" >
    <Sidebar.Items>
        <Sidebar.ItemGroup>
            {chapters.map((chapter: any) => (
                chapter.sub_chapters && chapter.sub_chapters.length > 0 ? (
                    <Sidebar.Collapse key={chapter.id} icon={HiArrowSmRight} label={chapter.title}>
                        {chapter.sub_chapters.map((subChapter: any) => (
                            <Sidebar.Item key={subChapter.id} href="#" onClick={() => handleItemClick(subChapter.id)}>
                                {subChapter.title}
                            </Sidebar.Item>
                        ))}
                    </Sidebar.Collapse>
                ) : (
                    <Sidebar.Item key={chapter.id} href="#" onClick={() => handleItemClick(chapter.id)}>
                        {chapter.title}
                    </Sidebar.Item>
                )
            ))}
        </Sidebar.ItemGroup>
    </Sidebar.Items>
</Sidebar>
  );
}
