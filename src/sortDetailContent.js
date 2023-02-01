
export function sort() {
    console.log("asd")

    const rightContainer = document.querySelector('.right-container')
    const leftContainer = document.querySelector('.left-container')
    
    const rightDiv = document.querySelectorAll('.detail-row')
    const leftDiv = document.querySelectorAll('.detail-line')
    
    rightDiv.forEach(element => {
        rightContainer.append(element);
    });
    
    
    leftDiv.forEach(element => {
        leftContainer.append(element);
    });
}