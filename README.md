# Three Project features

1. **Course Selection with dynamic notifications:**

   - Users can select courses from a grid of courses displayed on the website.
   - When a course is selected, the system checks if it has already been chosen.
   - If the course is already selected, a toast notification is displayed, informing the user that the course is already in their selection.

2. **Course Information Display:**

   - The project displays a grid of courses with course name, credit hours, price, and details.
   - Each course is displayed in a card format with an image.
   - Users can click on a "Select" button to add a course to their selection.

3. **Dynamic Credit Limit Tracking:**
   - The project dynamically tracks the credit hours and total prices of selected courses.
   - Users are provided with real-time feedback on the number of credit hours they have selected and the credit limit remaining.

# Discuss how you managed the state in your assignment project

- **App.jsx:**

```jsx
const [creditSelected, setCreditSelected] = useState(0);
const [totalPrice, setTotalPrice] = useState(0);
const [selectedCourses, setSelectedCourses] = useState([]);
```

Here, there are three states which are set by the cardClickHandler function in the "CourseCard" component which is run when the courses are selected. After which, they are passed to the "Selection" component as props where the content on the "Selection" component gets updated.

- **Courses.jsx:**

```jsx
const [courses, setCourses] = useState([]);
```

Here, the individual course are updated by the API via the useEffect function. Then, the courses are rendered onto a grid layout including any changes that would be made to the course cards.
