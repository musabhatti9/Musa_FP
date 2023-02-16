import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='bg'>
        <div className='Logo center'>
          <div className='container'>
            <h1 className='logo text-dark'>FIT.</h1>
            <p className='ml-3 mb-4 lead'>An online Fitness Tracking App.</p>
            <Link className="btn btn-dark  ml-3" aria-current="page" to="/activity">Activities</Link>
            <Link className="btn btn-outline-dark  ml-3" aria-current="page" to="/register">Register</Link>
          </div>
        </div>
      </div>
      <div className='container-fluid mt-3 mb-3'>
      <h1 className='text-dark'>About FIT.</h1>
      <p className='text-dark lead ml-2 mr-2'>Fit is a popular fitness tracking app that has been helping millions of people worldwide to achieve their health and fitness goals. This app is designed to be user-friendly and provides a wealth of features to help individuals track their progress and stay motivated.</p>
      <p className='text-dark lead ml-2 mr-2'>One of the key features of Fit is its ability to track a variety of physical activities, including running, cycling, swimming, and weightlifting. This makes it easy to monitor your progress and set realistic goals for your fitness journey. The app also provides a detailed analysis of your performance, including calorie burn, distance covered, and time spent exercising, making it easy to see where you need to improve.</p>
      <p className='text-dark lead ml-2 mr-2'>Fit also offers a range of tools to help you stay motivated and on track. This includes the ability to set reminders for when to exercise, track your progress towards your goals, and join challenges with friends and family. The app also integrates with a variety of wearable devices, such as fitness trackers and smartwatches, to provide a complete picture of your fitness journey.</p>
      <p className='text-dark lead ml-2 mr-2'>Another great feature of Fit is its social component, which allows you to connect with friends and family and share your progress with others. This can be a great way to stay motivated and get support as you work towards your fitness goals. You can also join groups and participate in challenges, making it easy to stay engaged and motivated.</p>
      <p className='text-dark lead ml-2 mr-2'>Fit also provides a wealth of resources and educational content to help you achieve your goals. This includes articles, videos, and tips on topics such as nutrition, exercise, and mindfulness. With this information, you can make informed decisions about your health and fitness and achieve your goals more quickly and effectively.</p>
      <p className='text-dark lead ml-2 mr-2'>In conclusion, Fit is a comprehensive fitness tracking app that provides a wealth of features to help individuals track their progress and stay motivated. Whether you are looking to get in shape, lose weight, or simply improve your overall health and fitness, Fit is a great choice for anyone looking to achieve their goals. So why not give it a try today and see for yourself how it can help you reach your full potential!</p>
      </div>
    </div>
  )
}

export default Home