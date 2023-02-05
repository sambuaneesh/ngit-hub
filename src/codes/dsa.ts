export default [
  {
    title: `1.Implementation of Stack using Array`,
    code: `
#include<stdio.h>
#define MAX 10

int top=-1;
int stack[MAX];

void push(int data){
    if(top>=MAX){
    printf("STACK OVERFLOW!");
    return;
    }
    ++top;
    stack[top] = data;
}

void pop(){
    if(top==-1){
        printf("STACK UNDERFLOW!");
        return;
    }
    --top;
}
void display(){
    while(top>-1)
    printf("%d\n",stack[top--]);
}

int main(){
    int inp,num;
    while(1){
        scanf("%d",&inp);
        if(inp==3){
            display();
            return 0;
        }
        else if(inp==2){
            pop();
            continue;
        }
        scanf("%d",&num);
        if(inp==1) push(num);
        else return 0;
    }
}
      `,
  },
  {
    title: `2.Implementation of Queue using Array.`,
    code: `
#include <stdio.h>
#include <stdlib.h>
#define MAX 50
void insert();
void delete();
void display();
int queue_array[MAX];
int rear = -1;
int front = -1;
int main()
{
    int choice;
    printf("1.Insert\n");
    printf("2.Delete\n");
    printf("3.Display \n");
    printf("4.Quit \n");
    while (1)
    {
        printf("Enter your choice : \n");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            insert();
            break;
        case 2:
            delete ();
            break;
        case 3:
            display();
            break;
        case 4:
            exit(1);
            break;
        default:
            printf("Wrong choice \n");
        }
    }
}
void insert()
{
    int add_item;
    if (rear == MAX - 1)
        printf("Queue Overflow \n");
    else
    {
        if (front == -1)
            front = 0;
        printf("Insert the element in queue : ");
        scanf("%d", &add_item);
        rear = rear + 1;
        queue_array[rear] = add_item;
    }
}
void delete()
{
    if (front == -1 || front > rear)
    {
        printf("Queue Underflow \n");
        return;
    }
    else
    {
        printf("Element deleted from queue is : %d\n", queue_array[front]);
        front = front + 1;
    }
}
void display()
{
    int i;
    if (front == -1)
        printf("Queue is empty \n");
    else
    {
        printf("Queue is : \n");
        for (i = front; i <= rear; i++)
            printf("%d ", queue_array[i]);
        printf("\n");
    }
}
    `,
  },
  {
    title: `3.Implementation of Postfix Expression Evaluation using stack`,
    code: `
#include<stdio.h>
#include<string.h>

int stack[100];
int top=-1;

void pop(){
    --top;
}

void push(int num){
    stack[++top] = num;
}

void display(){
        printf("%d",stack[top]);
}

int main()
{
    char str[100];
    int a,b;
    scanf("%s",str);
    for(int i=0;i<strlen(str);i++){
        if(str[i]=='+'||str[i]=='-'||str[i]=='*'||str[i]=='/'){
            a=stack[top];
            pop();
            b=stack[top];
            
            pop();
            switch(str[i]){
                case'+':
                    push(b+a);
                    break;
                case'-':
                    push(b-a);
                    break;
                case'*':
                    push(b*a);
                    break;
                case'/':
                    push(b/a);
                    break;  
            }
        }
        else push(str[i]-'0');
    }
    display();
}
    `,
  },
  {
    title: `4.Implementation of Singly Linked List operations.`,
    code: `
#include <stdio.h>
#include <stdlib.h>
void push();
void pop();
void display();
struct node
{
    int val;
    struct node *next;
};
struct node *head;
void main()
{
    int choice = 0;
    printf("\nStack operations using linked list");
    printf("\nChose one from the below options...");
    printf("\n1.Push\n2.Pop\n3.Show\n4.Exit");
    while (choice != 4)
    {
        printf("\nEnter your choice \n");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
        {
            push();
            break;
        }
        case 2:
        {
            pop();
            break;
        }
        case 3:
        {
            display();
            break;
        }
        case 4:
        {
            printf("Exiting....");
            break;
        }
        default:
        {
            printf("Please Enter valid choice ");
        }
        };
    }
}
void push()
{
    int val;
    struct node *ptr = (struct node *)malloc(sizeof(struct node));
    if (ptr == NULL)
    {
        printf("not able to push the element");
    }
    else
    {
        printf("Enter the value\n");
        scanf("%d", &val);
        if (head == NULL)
        {
            ptr->val = val;
            ptr->next = NULL;
            head = ptr;
        }
        else
        {
            ptr->val = val;
            ptr->next = head;
            head = ptr;
        }
    }
}
void pop()
{
    int item;
    struct node *ptr;
    if (head == NULL)
    {
        printf("Underflow");
    }
    else
    {
        item = head->val;
        ptr = head;
        head = head->next;
        free(ptr);
        printf("Item popped");
    }
}
void display()
{
    int i;
    struct node *ptr;
    ptr = head;
    if (ptr == NULL)
    {
        printf("Stack is empty\n");
    }
    else
    {
        printf("Printing Stack elements \n");
        while (ptr != NULL)
        {
            printf("%d\n", ptr->val);
            ptr = ptr->next;
        }
    }
}
    `,
  },
  {
    title: `5.Implementation of Doubly Linked List operations.`,
    code: `
#include <stdio.h>
#include <stdlib.h>

struct Node
{
    struct Node *prev;
    int data;
    struct Node *next;
};

struct Node *HEAD;

int takeInput()
{
    int n;
    scanf("%d", &n);
    return n;
}

struct Node *getNewNode(int d)
{
    struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));
    newNode->data = d;
    newNode->next = NULL;
    newNode->prev = NULL;
    return newNode;
}

void insertAtBegin(int d)
{
    struct Node *newNode = getNewNode(d);
    if (HEAD == NULL)
        HEAD = newNode;
    else
    {
        HEAD->prev = newNode;
        newNode->next = HEAD;
        HEAD = newNode;
    }
}

void insertAtEnd(int d)
{
    struct Node *newNode = getNewNode(d);
    if (HEAD == NULL)
        HEAD = newNode;
    else
    {

        struct Node *temp = HEAD;
        while (temp->next != NULL)
            temp = temp->next;
        temp->next = newNode;
        newNode->prev = temp;
    }
}

void deleteFromBegin()
{
    if (HEAD == NULL)
        printf("Empty List cannot be deleted\n");
    else
    {
        struct Node *temp = HEAD;
        HEAD = HEAD->next;
        free(temp);
    }
}

void deleteFromEnd()
{
    if (HEAD == NULL)
        printf("Empty List cannot be deleted\n");
    else
    {
        struct Node *temp = HEAD;
        while (temp->next != NULL)
            temp = temp->next;
        struct Node *temp_back = temp->prev;
        temp_back->next = NULL;
        free(temp);
    }
}

void insertAtPos(int d, int pos)
{
    struct Node *newNode = getNewNode(d);
    struct Node *temp = HEAD;
    for (int i = 0; i < pos - 1; i++)
        temp = temp->next;
    struct Node *previous = temp->prev;
    previous->next = newNode;
    newNode->prev = previous;
    newNode->next = temp;
}

void deleteFromPos(int pos)
{
    struct Node *temp = HEAD;
    for (int i = 0; i < pos - 1; i++)
        temp = temp->next;
    struct Node *previous = temp->prev;
    struct Node *next_el = temp->next;
    previous->next = temp->next;
    next_el->prev = previous;
    free(temp);
}

void display()
{
    struct Node *temp = HEAD;
    while (temp != NULL)
    {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

int main()
{
    HEAD = NULL;
    int num;
    while (1)
    {
        scanf("%d", &num);
        switch (num)
        {
        case 1:
            insertAtBegin(takeInput());
            break;
        case 2:
            insertAtEnd(takeInput());
            break;
        case 3:
            insertAtPos(takeInput(), takeInput());
            break;
        case 4:
            deleteFromBegin();
            break;
        case 5:
            deleteFromEnd();
            break;
        case 6:
            deleteFromPos(takeInput());
            break;
        case 7:
            display();
            break;
        case 8:
            return 0;
        }
    }
}
    `,
  },
  {
    title: `6.Implementation of Stack using Linked List.`,
    code: `
#include <stdio.h>
#include <stdlib.h>

// Data structure for a stack node
struct Node {
    int data; // Data field
    struct Node *next; // Pointer to the next node
};

// Data structure for a stack
struct Stack {
    struct Node *top; // Pointer to the top node
};

// Function prototypes
void push(struct Stack *s, int item); // Push an item onto the stack
int pop(struct Stack *s); // Pop an item from the stack
int is_empty(struct Stack *s); // Check if the stack is empty

int main(void)
{
    // Create a stack
    struct Stack stack;
    stack.top = NULL;

    // Push some items onto the stack
    push(&stack, 10);
    push(&stack, 20);
    push(&stack, 30);

    // Pop an item from the stack
    int item = pop(&stack);
    printf("Popped item: %d\n", item);

    // Pop another item from the stack
    item = pop(&stack);
    printf("Popped item: %d\n", item);

    return 0;
}

// Push an item onto the stack
void push(struct Stack *s, int item)
{
    // Allocate memory for a new node
    struct Node *node = malloc(sizeof(struct Node));
    // Set the data field of the new node
    node->data = item;
    // Set the next field of the new node to the top node
    node->next = s->top;
    // Set the top node to the new node
    s->top = node;
}

// Pop an item from the stack
int pop(struct Stack *s)
{
    // Check if the stack is empty
    if (is_empty(s))
    {
        printf("Error: Stack is empty\n");
        exit(EXIT_FAILURE);
    }

    // Get the data field of the top node
    int item = s->top->data;
    // Get the top node
    struct Node *node = s->top;
    // Set the top node to the next node
    s->top = s->top->next;
    // Free the memory of the popped node
    free(node);

    return item;
}

// Check if the stack is empty
int is_empty(struct Stack *s)
{
    return s->top == NULL;
}

    `,
  },
  {
    title: `7.Implementation of Queue using Linked List`,
    code: `
#include <stdio.h>
#include <stdlib.h>
struct node
{
    int data;
    struct node *next;
};
struct node *front = NULL;
struct node *rear = NULL;
void enqueue(int value)
{
    struct node *ptr;
    ptr = (struct node *)malloc(sizeof(struct node));
    ptr->data = value;
    ptr->next = NULL;
    if ((front == NULL) && (rear == NULL))
    {
        front = rear = ptr;
    }
    else
    {
        rear->next = ptr;
        rear = ptr;
    }
    printf("Node is Inserted");
}
int dequeue()
{
    if (front == NULL)
    {
        printf("\nUnderflow\n");
        return -1;
    }
    else
    {
        struct node *temp = front;
        int temp_data = front->data;
        front = front->next;
        free(temp);
        return temp_data;
    }
}
void display()
{
    struct node *temp;
    if ((front == NULL) && (rear == NULL))
    {
        printf("\nQueue is Empty\n");
    }
    else
    {
        printf("The queue is \n");
        temp = front;
        while (temp)
        {
            printf("%d--->", temp->data);
            temp = temp->next;
        }
        printf("NULL");
    }
}
int main()
{
    int choice, value;
    printf("\nImplementation of Queue using Linked List\n");
    printf("1.Enqueue\n2.Dequeue\n3.Display\n4.Exit");
    while (choice != 4)
    {
        printf("\nEnter your choice : ");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            printf("\nEnter the value to insert: ");
            scanf("%d", &value);
            enqueue(value);
            break;
        case 2:
            printf("Popped element is :%d", dequeue());
            break;
        case 3:
            display();
            break;
        case 4:
            exit(0);
            break;
        default:
            printf("\nWrong Choice\n");
        }
    }
    return 0;
}
    `,
  },
  {
    title: `8.Implementation of linear & Binary Search to search for a key element.`,
    code: `
#include<stdio.h>

int func(int* arr, int lb, int ub, int key){
    int md = (lb+ub)/2;
    if(ub<lb) return -1;
    else if(key==arr[md]) return md;
    else if(key>arr[md]) return func(arr, md+1, ub, key);
    return func(arr, lb, md-1, key);
}

int main()
{
    int n, arr[100],key;
    scanf("%d",&n);
    int lb=0, ub=n-1, md=(lb+ub)/2;
    for(int i=0;i<n;i++) scanf("%d",&arr[i]);
    scanf("%d",&key);
    if(func(arr,lb,ub,key)>=0)
        printf("The element is at index %d",func(arr,lb,ub,key));
    else
        printf("The element not found");
    
}
    `,
  },
  {
    title: `9.Implementation of Hashing.`,
    code: `
#include<stdio.h>
#include <stdlib.h>
#include<limits.h>
 
void insert(int ary[],int hFn, int size){
    int pos,n=0,element;
    printf("Enter key element to insert\n");
    scanf("%d",&element);
    pos=element%hFn;
    while(ary[pos]!=INT_MIN)
    {
        pos=(pos+1)%hFn;
        n++;
        if(n==size)break;
    }
    if(n==size)
        printf("Hash table is FULL\nNo Place to Insert\n");
        else
        ary[pos]=element;
 
 
 
}
 
void delete(int ary[],int hFn,int size){
    int element,n=0,pos;
    printf("Enter element to delete\n");
    scanf("%d",&element);
    pos=element%hFn;
    while(n++!=size)
    {
        if(ary[pos]==INT_MIN)
        {
            printf("Element not found in hash table\n");
            break;
        }
        else if(ary[pos]==element)
        {
            ary[pos]=INT_MIN;
            printf("Element deleted\n\n");
            break;
        }
        else
        {
            pos=(pos+1)%hFn;
        }
    }
    if(--n==size)
    printf("Element not found in hash table\n");
    
    
    
    
}
 
void search(int ary[],int hFn,int size){
        int element,pos,n=0;
        printf("Enter element you want to search\n");
        scanf("%d",&element);
        pos=element%hFn;
        while(n++!=size)
        {
            if(ary[pos]==element)
            {
                printf("Element found at index %d\n",pos);
                break;
            }
            else
            if(ary[pos]==INT_MAX||ary[pos]!=INT_MIN)
            pos=(pos+1)%hFn;
        }
        if(--n==size)
        printf("Element not found in hash table\n");




}
 
void display(int ary[],int size){
    int i;
     
    printf("Index\tValue\n");
     
    for(i=0;i<size;i++)
            printf("%d\t%d\n",i,ary[i]);
}
int main(){
    int size,hFn,i,choice;
     
    printf("Enter size of hash table\n");
    scanf("%d",&size);
     
    int ary[size];
     
    printf("Enter hash function [if mod 10 enter 10]\n");
    scanf("%d",&hFn);
     
    for(i=0;i<size;i++)
            ary[i]=INT_MIN; //Assigning INT_MIN indicates that cell is empty
     
    do{
    printf("Enter your choice\n");
    printf(" 1-> Insert\n 2-> Delete\n 3-> Display\n 4-> Searching\n 0-> Exit\n");
    scanf("%d",&choice);
     
    switch(choice){
    case 1:
    insert(ary,hFn,size);
    break;
    case 2:
    delete(ary,hFn,size);
    break;
    case 3:
    display(ary,size);
    break;
    case 4:
    search(ary,hFn,size);
    break;
    case 0:exit(0);
    default:
    printf("Enter correct choice\n");
    break;
    }
    }while(choice);
     
    return 0;
}
    `,
  },
  {
    title: `10.Implementation of Insertion sort`,
    code: `
#include <math.h>
#include <stdio.h>

void insertionSort(int arr[], int n)
{
     //Write your Insertion-sort logic here...

    int i,key,j;
    for(int i=1; i<n; i++){
        key = arr[i];
        j = i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = key;
    }
    
    
}

int main()
{
	int n;
	scanf("%d",&n);
        int arr[n];
	for(int i=0;i<n;i++)
	{
		scanf("%d",&arr[i]);
    }

	insertionSort(arr, n);
	for (int i = 0; i < n; i++)
		printf("%d ", arr[i]);

	return 0;
}
    `,
  },
  {
    title: `11.Implementation of Quick sort`,
    code: `
#include <stdio.h>

void swap(int *a, int *b)
{
    (*a==*b)?:(*a+=*b)&&(*b=*a-*b)&&(*a-=*b);
}

void quickSort(int number[],int first,int last)
{
    //Write your Quick-sort logic here... 
    
    if(first >= last) return;
    int pindex = first;
    for(int i=first; i<last; i++) if(number[i] <= number[last]) swap(&number[i], &number[pindex++]);
    swap(&number[last], &number[pindex]);
    // number[last]==number[pindex]?:(number[last]+=number[pindex])&&(number[pindex]=number[last]-number[pindex])&&(number[last]-=number[pindex]);
    quickSort(number,first,pindex-1);
    quickSort(number,pindex+1,last);
}

// main function
int main() {
	int n;
	scanf("%d",&n);
        int data[n];
	for(int i=0;i<n;i++)
	{
		scanf("%d",&data[i]);
    }
    quickSort(data, 0, n - 1);
	for (int i = 0; i < n; ++i) {
		printf("%d ", data[i]);
	}
}
    `,
  },
  {
    title: `12.Implementation of Merge sort`,
    code: `
#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

// Function prototypes
void merge_sort(int arr[], int low, int high);
void merge(int arr[], int low, int mid, int high);

int main(void)
{
    int arr[MAX_SIZE], n;

    // Read the number of elements in the array
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    // Read the elements of the array
    printf("Enter the elements: ");
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    // Sort the array using merge sort
    merge_sort(arr, 0, n - 1);

    // Print the sorted array
    printf("Sorted array: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");

    return 0;
}

// Merge sort function
void merge_sort(int arr[], int low, int high)
{
    // If the array has more than one element, split it into two halves
    if (low < high)
    {
        // Find the middle point
        int mid = (low + high) / 2;

        // Sort the first half
        merge_sort(arr, low, mid);
        // Sort the second half
        merge_sort(arr, mid + 1, high);
        // Merge the two sorted halves
        merge(arr, low, mid, high);
    }
}

// Merge function
void merge(int arr[], int low, int mid, int high)
{
    // Calculate the sizes of the two halves
    int n1 = mid - low + 1;
    int n2 = high - mid;

    // Create temporary arrays for the two halves
    int left[n1], right[n2];

    // Copy the elements of the two halves into the temporary arrays
    for (int i = 0; i < n1; i++)
        left[i] = arr[low + i];
    for (int i = 0; i < n2; i++)
        right[i] = arr[mid + 1 + i];

    // Merge the two halves back into the original array
    int i = 0, j = 0, k = low;
    while (i < n1 && j < n2)
    {
        if (left[i] <= right[j])
            arr[k++] = left[i++];
        else
            arr[k++] = right[j++];
    }

    // Copy the remaining elements of the left half, if any
    while (i < n1)
        arr[k++] = left[i++];
    // Copy the remaining elements of the right half, if any
    while (j < n2)
        arr[k++] = right[j++];
}
    `,
  },
  {
    title: `13.Implementation of Shell sort`,
    code: `
#include <stdio.h>

void swap(int *a, int *b)
{
    *a == *b ?: (*a += *b) && (*b = *a - *b) && (*a -= *b);
}

void insert_sort(int *arr, int n)
{
    int i, key, j;
    for (int i = 1; i < n; i++)
    {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

void printarr(int *arr, int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
}

int main()
{
    int gap = 4;
    int arr[100];
    int size;
    scanf("%d", &size);
    for (int i = 0; i < size; i++)
        scanf("%d", &arr[i]);
    gap = size - 1;
    while (gap > 1)
    {

        for (int i = 0; i + gap < size; i++)
        {
            if (arr[i] > arr[i + gap])
                swap(&arr[i], &arr[i + gap]);
        }
        gap /= 2;
    }
    insert_sort(arr, size);
    printarr(arr, size);
}
    `,
  },
  {
    title: `14.Implementation of Heap sort`,
    code: `
#include <stdio.h>

// Function to heapify the array
// a: array to be heapified
// n: size of the array
// i: index of the current node
void heapify(int a[], int n, int i)
{
    // Initialize largest as the root node
    int largest = i;

    // Calculate the indices of the left and right children
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    // If the left child is larger than the root, set it as the new largest
    if (left < n && a[left] > a[largest])
        largest = left;

    // If the right child is larger than the current largest, set it as the new largest
    if (right < n && a[right] > a[largest])
        largest = right;

    // If the largest is not the root node, swap the values and heapify the affected sub-tree
    if (largest != i)
    {
        int temp = a[i];
        a[i] = a[largest];
        a[largest] = temp;

        heapify(a, n, largest);
    }
}

// Function to sort the array using the heap sort algorithm
// a: array to be sorted
// n: size of the array
void heapSort(int a[], int n)
{
    // Build the heap
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(a, n, i);

    // Extract the elements from the heap one by one
    for (int i = n - 1; i >= 0; i--)
    {
        int temp = a[0];
        a[0] = a[i];
        a[i] = temp;

        heapify(a, i, 0);
    }
}

// Function to print the array
// arr: array to be printed
// n: size of the array
void printArr(int arr[], int n)
{
    for (int i = 0; i < n; ++i)
    {
        printf("%d ", arr[i]);
    }
}

int main()
{
    // Read the size of the array
    int size;
    scanf("%d", &size);

    // Read the elements of the array
    int a[100];
    for (int i = 0; i < size; i++)
    {
        scanf("%d", &a[i]);
    }

    // Sort the array using heap sort
    heapSort(a, size);

    // Print the sorted array
    printArr(a, size);

    return 0;
}
    `,
  },
  {
    title: `15.Implementation of Tree Traversals on Binary Trees (in-order, pre-order & postorder)`,
    code: `
#include<stdio.h> 
#include<stdlib.h>

struct node  
{  
    int data;  
    struct node *left, *right;  
}; 

struct node *create()  
{  
    //NOTE: Please do not touch the code that is already given.
   struct node *temp;  
   int data, choice;  
   temp = (struct node *)malloc(sizeof(struct node));  
   printf("\nPress 0 to exit");  
   printf("\nPress 1 for new node");  
   printf("\nEnter your choice : ");  
   scanf("%d", &choice);   
   if(choice==0)  
    {  
        return 0;
    }  
    else  
    {  
       printf("\nEnter the data:");  
       scanf("%d", &data);  
       temp->data = data;  
       printf("\nEnter the left child of %d", data);  
       temp->left = create();  
       printf("\nEnter the right child of %d", data);  
       temp->right = create();  
       return temp;   
    }  
}  
void inorder(struct node *p)
{
    //Write your code here...
    
    if(p==NULL) return;
    inorder(p->left);
    printf("%d ",p->data);
    inorder(p->right);   




}
 
void preorder(struct node *p)
{
     //Write your code here...

    if(p==NULL) return;
    printf("%d ",p->data);
    preorder(p->left);
    preorder(p->right);   


}
 
void postorder(struct node *p)
{
     //Write your code here...

    if(p==NULL) return;
    postorder(p->left);
    postorder(p->right);   
    printf("%d ",p->data);


}
      
void main()  
{  
    struct node *root;  
    root = create();  
   printf("\ninorder: ");
   inorder(root);
   printf("\npreorder: ");
   preorder(root);
   printf("\npostorder: ");
   postorder(root);
}  
    `,
  },
  {
    title: `16.Implementation of Binary Search Tree. (Insertion, Deletion and Search operations)`,
    code: `
#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
};

struct Node *newNode(int d)
{
    struct Node *nNode = (struct Node *)malloc(sizeof(struct Node));
    nNode->data = d;
    nNode->left = NULL;
    nNode->right = NULL;
    return nNode;
}

struct Node *insertNode(struct Node *root, int d)
{
    if (root == NULL)
    {
        root = newNode(d);
        return root;
    }
    if (d > root->data)
        root->right = insertNode(root->right, d);
    else
        root->left = insertNode(root->left, d);

    return root;
}

struct Node *deleteNode(struct Node *root, int d)
{
    if (root == NULL)
        return root;
    if (d < root->data)
    {
        root->left = deleteNode(root->left, d);
    }
    if (d > root->data)
    {
        root->right = deleteNode(root->right, d);
    }
    else
    {
        if (root->left == NULL && root->right == NULL)
        {
            free(root);
            return NULL;
        }
        if (root->left == NULL)
        {
            struct Node *temp = root->right;
            free(root);
            return temp;
        }
        else if (root->right == NULL)
        {
            struct Node *temp = root->left;
            free(root);
            return temp;
        }
        struct Node *successor = root->right;
        while (successor->left != NULL)
            successor = successor->left;
        root->data = successor->data;
        // Delete inorder successor
        root->right = deleteNode(root->right, successor->data);
    }
    return root;
}

void inorder(struct Node *root)
{
    if (root == NULL)
        return;
    inorder(root->left);
    printf("%d -> ", root->data);
    inorder(root->right);
}

void postorder(struct Node *root)
{
    if (root == NULL)
        return;
    postorder(root->left);
    postorder(root->right);
    printf("%d -> ", root->data);
}

void preorder(struct Node *root)
{
    if (root == NULL)
        return;
    printf("%d -> ", root->data);
    preorder(root->left);
    preorder(root->right);
}

int main()
{
    int d, choice;
    struct Node *root = NULL;
    while (1)
    {
        printf("1.Insert 2.inorder 3.preorder 4.postorder 5.delete 6.Exit\nEnter your choice : ");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            printf("Enter data of node to be inserted : ");
            scanf("%d", &d);
            printf("\n");
            root = insertNode(root, d);
            break;
        case 2:
            inorder(root);
            printf("\n");
            break;
        case 3:
            preorder(root);
            printf("\n");
            break;
        case 4:
            postorder(root);
            printf("\n");
            break;
        case 5:
            printf("Enter data of node to be deleted : ");
            scanf("%d", &d);
            root = deleteNode(root, d);
            printf("Inorder traversal: ");
            inorder(root);
        case 6:
            exit(1);
        }
    }

    // root = insertNode(root, 5);
    // root = insertNode(root, 4);
    // root = insertNode(root, 6);
    inorder(root);
}
    `,
  },
  {
    title: `17.Implementation of DFS traversal on Graph`,
    code: `
#include <stdio.h>
int a[20][20], reach[20], n;
void dfs(int v)
{
    int i;
    reach[v] = 1;
    for (i = 1; i <= n; i++)
        if (a[v][i] && !reach[i])
        {
            printf("%d->%d\n", v, i);
            dfs(i);
        }
}
void main()
{
    int i, j, count = 0;
    scanf("%d", &n);
    for (i = 1; i <= n; i++)
    {
        reach[i] = 0;
        for (j = 1; j <= n; j++)
            a[i][j] = 0;
    }
    // adjacency matrix
    for (i = 1; i <= n; i++)
        for (j = 1; j <= n; j++)
            scanf("%d", &a[i][j]);
    dfs(1);
    for (i = 1; i <= n; i++)
    {
        if (reach[i])
            count++;
    }
    /* if(count==n)
    printf("\n Graph is connected");
    else
    printf("\n Graph is not connected");*/
}
    `,
  },
  {
    title: `18.Implementation of BFS traversal on Graph`,
    code: `
#include <stdio.h>

int queue[10];
int front = 0, rear = 0;

void insert(int var)
{
    queue[rear++] = var;
}

void del()
{
    queue[front++] = 0;
}

int main()
{
    int i, j, n;
    int graph[6][6];
    scanf("%d", &n);
    int visited[7] = {0};
    for (i = 0; i < n; i++)
        for (j = 0; j < n; j++)
            scanf("%d", &graph[i][j]);
    insert(1);
    visited[0] = 1;
    while (front != rear)
    {
        int current = queue[front];
        printf("->%d", current);
        del();
        for (i = 0; i < n; i++)
        {
            if (graph[current - 1][i] == 1 && visited[i] == 0)
            {
                visited[i] = 1;
                insert(i + 1);
            }
        }
    }
    return 0;
}
    `,
  },
  {
    title: `19.Implementation of Prim's Algorithm`,
    code: `
#include <stdio.h>
#include <limits.h>
#define V 5
int minKey(int key[], int mstSet[])
{
    int min = INT_MAX, min_index;
    int v;
    for (v = 0; v < V; v++)
        if (mstSet[v] == 0 && key[v] < min)
            min = key[v], min_index = v;
    return min_index;
}
int printMST(int parent[], int n, int graph[V][V])
{
    int i;
    printf("Edge\tWeight\n");
    for (i = 1; i < V; i++)
        printf("%d->%d\t%d\n", parent[i], i, graph[i][parent[i]]);
}
void primMST(int graph[V][V])
{
    int parent[V];
    int key[V], i, v, count;
    int mstSet[V];
    for (i = 0; i < V; i++)
        key[i] = INT_MAX, mstSet[i] = 0;
    key[0] = 0;
    parent[0] = -1;
    for (count = 0; count < V - 1; count++)
    {
        int u = minKey(key, mstSet);
        mstSet[u] = 1;
        for (v = 0; v < V; v++)
            if (graph[u][v] && mstSet[v] == 0 && graph[u][v] < key[v])
                parent[v] = u, key[v] = graph[u][v];
    }
    printMST(parent, V, graph);
}
int main()
{
    int i, j, graph[V][V];
    for (i = 0; i < V; i++)
        for (j = 0; j < V; j++)
            scanf("%d", &graph[i][j]);
    primMST(graph);
    return 0;
}
    `,
  },
  {
    title: `20.Implementation of Kruskal's Algorithm`,
    code: `
#include <stdio.h>
#include <stdlib.h>
int i, j, k, a, b, u, v, n, ne = 1;
int min, mincost = 0, cost[9][9], parent[9];
int find(int);
int uni(int, int);
void main()
{
    scanf("%d", &n);
    for (i = 1; i <= n; i++)
        for (j = 1; j <= n; j++)
        {
            scanf("%d", &cost[i][j]);
            if (cost[i][j] == 0)
                cost[i][j] = 99;
        }
    printf("Edge\tWeight\n");
    while (ne < n)
    {
        for (i = 1, min = 99; i <= n; i++)
        {
            for (j = 1; j <= n; j++)
            {
                if (cost[i][j] < min)
                {
                    min = cost[i][j];
                    a = u = i;
                    b = v = j;
                }
            }
        }
        u = find(u);
        v = find(v);
        if (uni(u, v))
            printf("(%d->%d)\t%d\n", a, b, min);
        cost[a][b] = cost[b][a] = 99;
    }
}
int find(int i)
{
    while (parent[i])
        i = parent[i];
    return i;
}
int uni(int i, int j)
{
    if (i != j)
    {
        parent[j] = i;
        return 1;
    }
    return 0;
}
    `,
  },
  //   {
  //     title: ``,
  //     code: `

  //     `,
  //   },
];
