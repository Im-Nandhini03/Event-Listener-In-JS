function addBlog(blog) {
    const blogList = document.querySelector('.blog-list');
  
    // Create the main blog box
    const newBox = document.createElement('div');
    newBox.classList.add('blog-box');
  
    // Create the blog post container
    const newBlogPost = document.createElement('div');
    newBlogPost.classList.add('blog-post');
    newBox.appendChild(newBlogPost);
  
    // Create the blog header container
    const newBlogHeader = document.createElement('div');
    newBlogHeader.classList.add('blog-header');
    newBlogPost.appendChild(newBlogHeader);
  
    // Add blog title
    const newBlogTitle = document.createElement('h2');
    newBlogTitle.classList.add('blog-title');
    newBlogTitle.textContent = blog.title;
    newBlogHeader.appendChild(newBlogTitle);
  
    // Add blog date
    const newBlogDate = document.createElement('p');
    newBlogDate.classList.add('blog-date');
    newBlogDate.textContent = blog.date;
    newBlogHeader.appendChild(newBlogDate);
  
    // Add blog content
    const newBlogContent = document.createElement('p');
    newBlogContent.classList.add('blog-content');
    newBlogContent.textContent = blog.content;
    newBlogPost.appendChild(newBlogContent);
  
    // Create blog-buttons container
    const blogButtons = document.createElement('div');
    blogButtons.className = 'blog-buttons';
  
    // Create Move Up button
    const upButton = document.createElement('button');
    upButton.classList.add('blog-button', 'move-up');
    upButton.textContent = 'Move Up';
    blogButtons.appendChild(upButton);
  
    // Create Move Down button
    const downButton = document.createElement('button');
    downButton.classList.add('blog-button', 'move-down');
    downButton.textContent = 'Move Down';
    blogButtons.appendChild(downButton);
  
    // Create Delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('blog-button', 'delete');
    deleteButton.textContent = 'Delete';
    blogButtons.appendChild(deleteButton);
  
    // Append blog-buttons to newBox
    newBox.appendChild(blogButtons);
  
    // Append the new blog box to the blog list
    blogList.appendChild(newBox);
  
    // Add event listeners to the buttons
    upButton.addEventListener('click', () => moveUp(newBox));
    downButton.addEventListener('click', () => moveDown(newBox));
    deleteButton.addEventListener('click', () => deleteBlog(newBox));
  
    // Function to move a blog item up
    function moveUp(item) {
      const previousItem = item.previousElementSibling;
      if (previousItem) {
        blogList.insertBefore(item, previousItem);
      }
    }
  
    // Function to move a blog item down
    function moveDown(item) {
      const nextItem = item.nextElementSibling;
      if (nextItem) {
        blogList.insertBefore(nextItem, item);
      }
    }
  
    // Function to delete a blog item
    function deleteBlog(item) {
      blogList.removeChild(item);
    }
  }
  
  // Sample blog data
  const blogData = [
    {
      title: 'First Blog Post',
      date: 'January 1, 2022',
      content: 'This is the content of the first blog post.',
    },
    {
      title: 'Second Blog Post',
      date: 'February 1, 2022',
      content: 'This is the content of the second blog post.',
    },
    {
      title: 'Third Blog Post',
      date: 'March 1, 2022',
      content: 'This is the content of the third blog post.',
    },
  ];
  
  // Automatically call the function for each blog in the array
  blogData.forEach((blog) => addBlog(blog));
  