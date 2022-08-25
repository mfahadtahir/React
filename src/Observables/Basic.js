import { useEffect } from 'react';
import { Observable, take } from 'rxjs';

const process = new Observable(processWork => {
    processWork.next(1); // work 1
    processWork.next(2); // work 2
    processWork.next(3); // work 3
    setTimeout(() => {
        processWork.next(4); // work 4
    }, 2000);
})

export const Basic = () => {
  useEffect(() => {
    console.log("refresh");
    process.subscribe({
      next(x) { console.log(x); }, // handle when process send data successfully
      error(err) { console.error('something wrong occurred: ' + err); }, // handle when process is disturbed
      complete() { console.log('done'); } // handle when process is completed
    });
  }, [])

    return <div>
        <h1> Basic example</h1>
        <p> An observable is like a process which does some tasks and return multiple results </p>
        <p> an observer is is a collection of handlers which run based on outcome of process(observable) </p>
    </div>

}

export default App;
