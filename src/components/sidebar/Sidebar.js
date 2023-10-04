"use client"
import React from 'react'
import Image from 'next/image'

function Sidebar() {
  return (
    <>
      <div class="main_sidebar">
        <a class="main_logo" href="">
        <Image src="/performo.svg" alt="facebook" width={24} height={24} />
        </a>
        <ul class="menu_list">
          <li class="">
            <a href="./index.html">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              World
            </a>
          </li>
          <li class="active">
            <a href="./cases.html">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              Cricket
            </a>
          </li>
          <li class="">
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-package"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              Business
            </a>
          </li>
          <li class="">
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              Tech
            </a>
          </li>
          <li class="">
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              Movies
            </a>
          </li>
          <li class="">
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
              Sports
            </a>
          </li>
          <li class="">
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tool"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              India
            </a>
          </li>
          <li class="">
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
              Auto
            </a>
          </li>
        </ul>
      </div>
      <style>
        {`
          .main_sidebar { box-sizing: border-box; position: fixed; left: 0; top: 0; width: 260px; height: 100vh; z-index: 999; overflow: hidden; overflow-y: auto; background: #fff; transition: .3s; }
          .main_logo { height: 80px; display: flex; align-items: center; justify-content: flex-start; padding: 0 20px; border-bottom: 1px solid #E4E7ED; margin-bottom: 20px;}
          .main_logo img { width: 100%;  height: auto;}
          .menu_list { padding: 20px;}
          .menu_list li {   border-radius: 16px; cursor: pointer;}
          .menu_list li a { display: flex; align-items: center; gap: 15px; width: 100%; font: 400 16px/24px 'Inter', sans-serif;  color: #333333; padding: 15px;}
          .menu_list li:hover { color: #696CFF;}
          .menu_list li.active  { background-color: #e7e7ff;}
          .menu_list li.active a { font-weight: 600; color: #696CFF;  }
        `}
      </style>
    </>
  )
}

export default Sidebar