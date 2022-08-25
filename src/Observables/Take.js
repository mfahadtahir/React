import { interval, take } from 'rxjs';

export const TakeExample = () => {

    const intervalCount = interval(1000);
    const takeFive = intervalCount.pipe(take(5));
    takeFive.subscribe(x => console.log(x));
    return <div>Take example</div>
}