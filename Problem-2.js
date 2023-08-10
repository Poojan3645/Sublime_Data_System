//Problem - 2

function Reach(nums) {
    let max = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i > max) {
            return false;
        }
        max = Math.max(max, i + nums[i]);
        
        if (max >= nums.length - 1) {
            return true;
        }
    }
    
    return true;  
}

const nums = [2,3,1,1,4];
console.log(Reach(nums)); 
