import { redirect } from 'next/navigation'
 
export default function Redirect() {
  redirect(`/home`) // Navigate to the new home page
}