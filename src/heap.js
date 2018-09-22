/*|\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\
|\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/|
||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/
/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\

    Heap Sort Stencil | JavaScript support functions

    Quick JavaScript Code-by-Example Tutorial 
     
    @author ohseejay / https://github.com/ohseejay
                     / https://bitbucket.org/ohseejay

    Chad Jenkins
    Laboratory for Perception RObotics and Grounded REasoning Systems
    University of Michigan

    License: Michigan Honor License 

|\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/|
||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/
/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\
\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/*/


// create empty object 
minheaper = {};

// define insert function for min binary heap
function minheap_insert(heap, new_element) {
    // STENCIL: implement your min binary heap insert operation
    heap.push(new_element);
    minheap_fixUp(heap, heap.length - 1);
}

// assign insert function within minheaper object
minheaper.insert = minheap_insert;
/* Note: because the minheap_insert function is an object, we can assign 
      a reference to the function within the minheap object, which can be called
      as minheap.insert
*/

// define extract function for min binary heap
function minheap_extract(heap) {
    temp1 = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    minheap_fixDown(heap, 0);
    return temp1;
    // STENCIL: implement your min binary heap extract operation
}
minheaper.extract = minheap_extract;
// assign extract function within minheaper object

// STENCIL: ensure extract method is within minheaper object

function minheap_fixUp(heap, k) {
    while (k > 0 && heap[Math.floor((k - 1) / 2)].priority > heap[k].priority) {
        temp = heap[k];
        heap[k] = heap[Math.floor((k - 1) / 2)];
        heap[Math.floor((k - 1) / 2)] = temp;
        k = Math.floor((k - 1) / 2);
    }
    //return heap;
}

function minheap_fixDown(heap, k) {
    while ((2 * k + 1) < heap.length) {
        j = 2 * k + 1;      // j is the left child of k
        if (j < (heap.length - 1) && heap[j].priority > heap[j + 1].priority)
            j++

        if (heap[k].priority <= heap[j].priority) {
            break;
        }
        temp = heap[k];
        heap[k] = heap[j];
        heap[j] = temp;
        k = j;
    }

}

