"use client";

import React from "react";
import { RiHome5Line } from "react-icons/ri";
import { BsShopWindow } from "react-icons/bs";
import { GiFly } from "react-icons/gi";
import { MdBalcony } from "react-icons/md";

interface Props {
  closeMenu: () => void;
}

const ResponsiveLink = ({ closeMenu }: Props) => {
  return (
    <div className="gap-11 rounded-lg px-1 py-6 flex w-full flex-col justify-start">
      <a
        onClick={closeMenu}
        title="Asdeyapianasayfa"
        className="flex items-center gap-6 text-lg font-semibold"
        href="/"
      >
        <RiHome5Line size={30} /> Anasayfa
      </a>

      <a
        onClick={closeMenu}
        title="Asde yapı Pvc Sistemleri"
        className="flex items-center gap-6 text-lg font-medium opacity-90"
        href="/#pvc"
      >
        <BsShopWindow size={30} /> Pvc Kapı Pencere
      </a>

      <a
        onClick={closeMenu}
        title="Asde Yapı Sineklik Sistemleri"
        className="flex items-center gap-6 text-lg font-medium opacity-90"
        href="/anasineklik"
      >
        <GiFly size={30} /> Sineklik
      </a>

      <a
        onClick={closeMenu}
        title="Asde Yapı Cambalkon Sistemleri"
        className="flex items-center gap-6 text-lg font-medium opacity-90"
        href="/cambalkon"
      >
        <MdBalcony size={30} /> Cambalkon
      </a>
    </div>
  );
};

export default ResponsiveLink;
