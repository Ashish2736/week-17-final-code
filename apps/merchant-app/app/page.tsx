"use client";

import { useBalance } from "@repo/store/balance";




export default function() {
  const balance = useBalance();
  return <div>
    <div>
      hi
    </div>
    hi there {balance}
  </div>
}