import React from 'react'

function Welcome() {
  return (
   <>
   <div>
    <h1 className='text-primary '>
        Personal Expenses
    </h1>
    <div>
        This is a personal expense tracker application. You can add expenses and incomes, track them
    </div>
    <hr />
    <div className='d-flex  align-items-center justify-content-center'>
        <div>
        <button type="button" class="btn btn-primary mx-2">Sign up</button>
        </div>
        <div>
        <button type="button" class="btn btn-primary mx-2">Login</button>
        </div>
    </div>
   </div>
   </>
  )
}

export default Welcome
