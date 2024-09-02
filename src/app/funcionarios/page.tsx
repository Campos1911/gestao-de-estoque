"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Funcionarios = () => {
  return (
    <div className="flex flex-col w-full bg-white h-full rounded-tl-3xl p-6 gap-4">
      <p className="text-2xl">Gerenciar Funcionários</p>
      <Tabs
        defaultValue="account"
        className="flex flex-col w-full justify-center items-center"
      >
        <TabsList className="w-full py-7">
          <TabsTrigger className="w-[80%] py-3" value="account">
            Gerência
          </TabsTrigger>
          <TabsTrigger className="w-[80%] py-3" value="password">
            Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default Funcionarios;
