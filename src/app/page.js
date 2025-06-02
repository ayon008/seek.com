import { montserrat } from "@/Components/Fonts/Montserrat";
import Job from "@/Components/Home/Job";
import Search from "@/Components/Home/Search";
import SearchHistory from "@/Components/Home/SearchHistory";
import Logo from "@/Components/Icons/Logo/Logo";
import { Info } from "lucide-react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/Components/ui/table"

export default function Home() {
  const categories = [
    "Accounting",
    "Education & Training",
    "Government & Defence",
    "Healthcare & Medical",
    "Sales"
  ];
  const cities = [
    "Sydney",
    "Melbourne",
    "Brisbane",
    "Gold Coast",
    "Perth",
    "Adelaide",
    "Hobart",
    "Darwin",
    "Canberra"
  ];
  const jobCategories = [
    "All Jobs",
    "Work From Home Jobs",
    "FIFO Jobs",
    "Ethical Jobs",
    "Government Jobs",
    "Web3 Jobs",
    "Salary Calculator"
  ];

  return (
    <div>
      <Search />
      <div className="p-6 max-w-[1280px] mx-auto">
        <SearchHistory />
        {/* Jobs */}
        <div className="grid grid-cols-[3fr_2fr] gap-10 items-start mt-10">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="font-semibold text-3xl">Recommended for you</h1>
              <Info />
            </div>
            {/* Jobs */}
            <div className="mt-2 flex flex-col justify-between gap-3">
              {
                Array.from({ length: 10 }, (_, i) => i).map((_, i) => <Job key={i} />)
              }
            </div>
          </div>
          <div>
            <h2 className={`${montserrat.className} text-2xl text-primary`}>Saved searches</h2>
            <div className="border-[#EAECF1] mb-6 mt-3 rounded-[20px] border-2">
              <p className={`${montserrat.className} text-base p-6 text-primary`}>Use the Save search button below the search results to save your search and receive every new job.</p>
            </div>
            <h2 className={`${montserrat.className} text-2xl text-primary`}>Saved jobs</h2>
            <div className="border-[#EAECF1] mb-6 mt-3 rounded-[20px] border-2">
              <p className={`${montserrat.className} text-base p-6 text-primary`}>Use the Save search button below the search results to save your search and receive every new job.</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="bg-[#E60278] flex items-start justify-between px-12 pt-24 pb-20 rounded-3xl my-20">
          <div className="w-1/2">
            <h2 className="text-6xl font-bold text-white mb-5">Find the best job matches</h2>
            <div className="flex items-start gap-2 text-white">
              <Logo />
              <p className={`${montserrat.className} text-2xl mt-[2px]`}>and you shall find</p>
            </div>
          </div>
          <div className="w-1/2">

          </div>
        </div>
        {/* Quick search */}
        <div>
          <p className="font-semibold">Quick Search</p>
          <div className="mt-4">
            <Table className="w-3/4">
              <TableBody>
                <TableRow>
                  <TableCell className={'pl-0'}>Classification</TableCell>
                  {categories.map((category, i) => <TableCell className="underline text-primary" key={i}><Link href={'/'}>{category}</Link></TableCell>)}
                  <TableCell><button className="flex items-center underline text-primary gap-2"><span>View All</span> <ChevronDown className="w-5 h-5" /></button></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="">
            <Table className="w-3/4">
              <TableBody>
                <TableRow>
                  <TableCell className={'pl-0'}>Major Cities</TableCell>
                  {cities.map((category, i) => <TableCell className="underline text-primary" key={i}><Link href={'/'}>{category}</Link></TableCell>)}
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="">
            <Table className="w-3/4">
              <TableBody>
                <TableRow>
                  <TableCell className={'pl-0'}>Other</TableCell>
                  {jobCategories.map((category, i) => <TableCell className="underline text-primary" key={i}><Link href={'/'}>{category}</Link></TableCell>)}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
