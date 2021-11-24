function Title() {
    return(
    
            <header>
     
            <h1> Welcome to my Full Stack Flex Programmer Portfolio!</h1>
          <p id="about-me" class="p3"> Hi there! My name is George Sandoval, i am student of the UC Berkeley full stack flex program. New to coding but eager to get started on bigger projects! Feel free to email me or even check out my links at the bottom of my page to see more of my work and what I've been working on! I am Bilengual, hardworking, and a focused indivual learning more about Coding on a daily basis looking forward to start a carrer in the tech world.  </p>
          <br/>
          <p id="coding-journey" class="journey" style={{width: 200+"px"}}> Coding bootcamp progress so far <progress class="progress is-normal" value="40" max="100">60%</progress></p>
          <p> Here is a link to my <a href={`${process.env.PUBLIC_URL}/resume.pdf`}>resume</a></p>
        </header>
        
    );
}



export default Title;