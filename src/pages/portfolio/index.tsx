import React, { useState } from "react";
import { Header } from "@/components/Header";
import twitterImg from "../../assets/twitter.png";
import discordImg from "../../assets/discord.png";
import telegramImg from "../../assets/telegram.png";
import InstagramImg from "../../assets/instagram.png";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const Portfolio = () => {
  const [currentNav, setCurrentNav] = useState<string>("my-profile");
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("123245553");
  const [nickName, setNickName] = useState<string>("");
  const [nexTokens, setNexTokens] = useState<string>("");
  const [premium, setPremium] = useState<string>("");

  const [twitter, setTwitter] = useState<string>("");
  const [discord, setDiscord] = useState<string>("");
  const [telegram, setTelegram] = useState<string>("");
  const [Instagram, setInstagram] = useState<string>("");

  const [useNic, setUseNic] = useState<boolean>(false);
  const [plCom, setPlCom] = useState<boolean>(false);
  const [topWal, setTopWal] = useState<boolean>(true);
  const [followable, setFollowable] = useState<boolean>(true);
  const onClickNav = (nav: string) => {
    setCurrentNav(nav);
  };

  return (
    <div className="w-100 h-100 pl-5 pt-5">
      <div className="">
        <h1 className="text-3xl font-bold">Portfolio Page</h1>
      </div>
      <div className="rounded-4xl shadow-2xl shadow-gray ml-5">
        <div className="flex flex-row p-5 ">
          <div className="border-r border-gray my-4">
            <div className="p-2 py-3 space-y-3 w-72">
              <div className="">
                <button
                  className="m-1 w-48 h-100 rounded-xl bg-gray-light p-2 hover:bg-gray active:bg-gray focus:ring-gray-dark"
                  onClick={() => onClickNav("my-profile")}
                >
                  My profile
                </button>
              </div>
              <div>
                <button
                  className="m-1 w-48 h-100 rounded-xl bg-gray-light p-2 hover:bg-gray active:bg-gray focus:ring-gray-dark"
                  onClick={() => onClickNav("my-profile")}
                >
                  My profile
                </button>
              </div>
              <div>
                <button
                  className="m-1 w-48 h-100 rounded-xl bg-gray-light p-2 hover:bg-gray active:bg-gray focus:ring-gray-dark"
                  onClick={() => onClickNav("my-profile")}
                >
                  My profile
                </button>
              </div>
            </div>
          </div>
          <div className="pl-10 pr-5 pb-5 space-y-10 w-full">
            <h2 className="text-2xl font-bold">My Profile</h2>

            <div className="border border-gray rounded-md p-4">
              <div className="flex justify-between items-center">
                <p className="text-slate-500 text-lg">
                  <span className="font-bold">Personal Information</span>
                  <span className="ml-4 ">Address: {address}</span>
                </p>
                <button className=" border border-gray px-4 py-1 text-sm font-semibold rounded-full hover:text-white hover:bg-gray-light hover:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-dark focus:ring-offset-2">
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-2 p-5">
                <div className="p-4  items-center">
                  <p>Nick name</p>
                  <input
                    placeholder="Duncan"
                    value={nickName}
                    onChange={(e) => {
                      setNickName(e.target.value);
                    }}
                    className="border-b border-blue outline-none"
                  />
                </div>

                <div className="p-4 items-center">
                  <p>NEX tokens</p>
                  <input
                    placeholder="15"
                    value={nexTokens}
                    onChange={(e) => {
                      setNexTokens(e.target.value);
                    }}
                    className="border-b border-blue outline-none"
                  />
                </div>

                <div className="p-4 items-center">
                  <p>Premium</p>
                  <input
                    placeholder="A"
                    value={premium}
                    onChange={(e) => {
                      setPremium(e.target.value);
                    }}
                    className="border-b border-blue outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="border border-gray rounded-md p-4">
              <div className="flex justify-between ">
                <div>
                  <input
                    type="checkbox"
                    value={"Use NickName"}
                    checked={useNic}
                    onChange={() => setUseNic(!useNic)}
                    className="h-4 w-4"
                  />
                  <label
                    htmlFor="Use NicName"
                    onClick={() => setUseNic(!useNic)}
                  >
                    Use NickName
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={"PL Competition"}
                    checked={plCom}
                    onChange={() => setPlCom(!plCom)}
                    className="h-4 w-4"
                  />
                  <label
                    htmlFor="PL Competition"
                    onClick={() => setPlCom(!plCom)}
                  >
                    PL Competition
                  </label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    value={"Top Wallet"}
                    checked={topWal}
                    onChange={() => setTopWal(!topWal)}
                    className="h-4 w-4"
                  />
                  <label
                    htmlFor="Top Wallet"
                    onClick={() => setTopWal(!topWal)}
                  >
                    Top Wallet
                  </label>
                </div>
              </div>
            </div>

            <div className="border border-gray  rounded-md p-6">
              <div className=" grid grid-col-2 space-y-5">
                <p className="">Socal Connections</p>
                <div className="py-1 px-2">
                  <input
                    type="checkbox"
                    value={"Followable"}
                    checked={followable}
                    onChange={() => setFollowable(!followable)}
                    className="w-4 h-4"
                  />
                  <label
                    htmlFor="Followable"
                    onClick={() => setFollowable(!followable)}
                  >
                    Followable
                  </label>
                </div>

                <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg items-center border border-gray rounded-xl space-x-4 w-full inline-flex">
                  <Image
                    src={twitterImg}
                    alt="Logo of Twitter"
                    className="float-left h-12 w-12 "
                  ></Image>
                  <input
                    placeholder="Twitter"
                    value={twitter}
                    onChange={(e) => {
                      setTwitter(e.target.value);
                    }}
                    className="border-b border-blue outline-none "
                  />
                </div>

                <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg items-center border border-gray  rounded-xl space-x-4 w-full inline-flex ">
                  <Image
                    src={discordImg}
                    alt="Logo of Discord"
                    className="float-left h-12 w-12"
                  ></Image>
                  <input
                    placeholder="Discord"
                    value={discord}
                    onChange={(e) => {
                      setDiscord(e.target.value);
                    }}
                    className="border-b border-blue outline-none"
                  />
                </div>

                <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg items-center border border-gray  rounded-xl space-x-4 w-full inline-flex">
                  <Image
                    src={telegramImg}
                    alt="Logo of Telegram"
                    className="float-left h-12 w-12"
                  ></Image>
                  <input
                    placeholder="Telegram"
                    value={telegram}
                    onChange={(e) => {
                      setTelegram(e.target.value);
                    }}
                    className="border-b border-blue outline-none"
                  />
                </div>

                <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg items-center border border-gray rounded-xl space-x-4 w-full inline-flex">
                  <Image
                    src={InstagramImg}
                    alt="Logo of Instagram"
                    className="float-left h-12 w-12"
                  ></Image>
                  <input
                    placeholder="Instagram"
                    value={Instagram}
                    onChange={(e) => {
                      setInstagram(e.target.value);
                    }}
                    className="border-b border-blue outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
