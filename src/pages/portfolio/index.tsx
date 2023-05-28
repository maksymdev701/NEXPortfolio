import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import twitterImg from "../../assets/twitter.png";
import discordImg from "../../assets/discord.png";
import telegramImg from "../../assets/telegram.png";
import InstagramImg from "../../assets/instagram.png";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Checkbox from "@/components/checkbox";
import Card from "@/components/card";
import InputText from "@/components/input-text";

import { useDispatch, useSelector } from "react-redux";
import { saveDraft } from "@/store/types";

const Portfolio = () => {
    const dispatch = useDispatch();
    const profile = useSelector((s: any) => s.profile);

    const [currentNav, setCurrentNav] = useState<string>(profile.currentNav);
    const [address, setAddress] = useState<string>(profile.address);
    const [nickName, setNickName] = useState<string>(profile.nickName);
    const [nexTokens, setNexTokens] = useState<string>(profile.nexTokens);
    const [premium, setPremium] = useState<string>(profile.premium);

    const [twitter, setTwitter] = useState<string>(profile.twitter);
    const [discord, setDiscord] = useState<string>(profile.discord);
    const [telegram, setTelegram] = useState<string>(profile.telegram);
    const [Instagram, setInstagram] = useState<string>(profile.Instagram);

    const [useNic, setUseNic] = useState<boolean>(profile.useNic);
    const [plCom, setPlCom] = useState<boolean>(profile.plCom);
    const [topWal, setTopWal] = useState<boolean>(profile.topWal);
    const [followable, setFollowable] = useState<boolean>(profile.followable);
    const onClickNav = (nav: string) => {
        setCurrentNav(nav);
    };

    const [editable, setEditable] = useState<boolean>(false);

    useEffect(() => {
        if (editable == true) return;
        dispatch(
            saveDraft({
                currentNav,
                address,
                nickName,
                nexTokens,
                premium,
                twitter,
                discord,
                telegram,
                Instagram,
                useNic,
                plCom,
                topWal,
                followable,
            })
        );
    }, [editable]);

    return (
        <div className="w-100 h-100 pl-5 pt-5 font-sans">
            <div className="">
                <h1 className="text-3xl font-bold">Portfolio Page</h1>
            </div>
            <div className="rounded-4xl shadow-2xl shadow-gray ml-5">
                <div className="flex flex-row p-5 ">
                    <div className="border-r border-gray my-4">
                        <div className="p-2 py-3 space-y-3 w-72">
                            <button
                                className="m-1 w-32 h-100 rounded-xl bg-[#eaefff] text-[#2962ff] hover:text-[#3a60c7] p-2 hover:bg-[#eaefffbd] active:bg-[#eaefffbd] rounded-[20px]"
                                onClick={() => onClickNav("my-profile")}
                            >
                                My profile
                            </button>
                        </div>
                    </div>
                    <div className="pl-10 pr-5 pb-5 space-y-10 w-full">
                        <h2 className="text-2xl font-bold">My Profile</h2>

                        <div className="border border-gray rounded-md p-4">
                            <div className="flex justify-between items-center">
                                <p className="text-slate-500 text-lg">
                                    <span className="font-sans">
                                        Personal Information
                                    </span>
                                    <span className="ml-20 ">
                                        Address: {address}
                                    </span>
                                </p>
                                <button
                                    className="ml-20 rounded-[20px] border-black border-2 px-4 py-2 text-gray hover:bg-gray-light active:border-transparent"
                                    onClick={() => setEditable(!editable)}
                                >
                                    {!editable ? "Edit" : "Save"}
                                    <i
                                        className="material-icons pl-2"
                                        style={{ fontSize: 16 }}
                                    >
                                        edit
                                    </i>
                                </button>
                            </div>
                            <div className="flex flex-row">
                                <div className="flex-grow-[3] grid grid-cols-2 p-5 w-[80%]">
                                    <InputText
                                        labelName="Nick name"
                                        onChange={setNickName}
                                        value={nickName}
                                        placeholder="Duncan"
                                        disabled={!editable}
                                    />
                                    <InputText
                                        labelName="NEX tokens"
                                        onChange={setNexTokens}
                                        value={nexTokens}
                                        placeholder="15"
                                        disabled={!editable}
                                    />
                                    <InputText
                                        labelName="Premium"
                                        onChange={setPremium}
                                        value={premium}
                                        placeholder="A"
                                        disabled={!editable}
                                    />
                                </div>
                                <div className="flex-grow-[1] flex  flex-col justify-center">
                                    <input
                                        type="file"
                                        id="actual-btn"
                                        hidden
                                        disabled={!editable}
                                    />
                                    <label
                                        htmlFor="actual-btn"
                                        className="bg-[url('/avatar-upload.png')] w-32 h-32 bg-cover inline-block cursor-pointer"
                                    ></label>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray rounded-md p-4">
                            <div className="flex justify-between ">
                                <Checkbox
                                    checked={useNic}
                                    onChange={setUseNic}
                                    value="Use Nickname"
                                    labelName="Use Nickname"
                                    disabled={!editable}
                                />
                                <Checkbox
                                    checked={plCom}
                                    onChange={setPlCom}
                                    value="PL Competition"
                                    labelName="PL Competition"
                                    disabled={!editable}
                                />
                                <Checkbox
                                    checked={topWal}
                                    onChange={setTopWal}
                                    value="Top Wallet"
                                    labelName="Top Wallet"
                                    disabled={!editable}
                                />
                            </div>
                        </div>

                        <div className="border border-gray  rounded-md p-6">
                            <div className="space-y-5">
                                <p className="">Socal Connections</p>
                                <Checkbox
                                    checked={followable}
                                    onChange={setFollowable}
                                    value="Followable"
                                    labelName="Followable"
                                    className="py-1 px-2"
                                    disabled={!editable}
                                />

                                <Card
                                    imgSrc={twitterImg}
                                    imgAlt={"Logo of Twitter"}
                                    placeholder={"Twitter"}
                                    value={twitter}
                                    onChange={setTwitter}
                                    disabled={!editable}
                                />
                                <Card
                                    imgSrc={discordImg}
                                    imgAlt={"Logo of Discord"}
                                    placeholder={"Discord"}
                                    value={discord}
                                    onChange={setDiscord}
                                    disabled={!editable}
                                />
                                <Card
                                    imgSrc={telegramImg}
                                    imgAlt={"Logo of Telegram"}
                                    value={telegram}
                                    placeholder={"Telegram"}
                                    onChange={setTelegram}
                                />
                                <Card
                                    imgSrc={InstagramImg}
                                    imgAlt={"Logo of Instagram"}
                                    value={Instagram}
                                    placeholder={"Instagram"}
                                    onChange={setInstagram}
                                    disabled={!editable}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
