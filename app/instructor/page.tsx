import { redirect } from 'next/navigation';
import React from 'react'

const InstructorPage = () => {
  return redirect("/instructor/courses");
}

export default InstructorPage
