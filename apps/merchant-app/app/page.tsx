"use client";

import { useBalance } from "@repo/store/balance";




export default function() {
  const balance = useBalance();
  return <div>
    <div>
      added a new div here
    </div>
    hi there {balance}
  </div>
}