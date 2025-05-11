function renderDatasetCard(containerSelector, dataset) {
  // Wait for template to be loaded
  const waitForTemplate = () => {
    const template = document.getElementById('dataset-card-template');
    if (template) {
      const clone = template.content.cloneNode(true);

      clone.querySelector('.dataset-image').src = dataset.image;
      clone.querySelector('.dataset-image').alt = dataset.title;
      clone.querySelector('.dataset-title').textContent = dataset.title;
      clone.querySelector('.dataset-author-name').textContent = dataset.author;
      clone.querySelector('.dataset-link').href = dataset.paperUrl;
      clone.querySelector('.dataset-link').textContent = dataset.paperTitle;
      clone.querySelector('.dataset-link-button').href = dataset.homepage;

      const tagsContainer = clone.querySelector('.dataset-tags');
      dataset.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        tagsContainer.appendChild(span);
      });

      const container = document.querySelector(containerSelector);
      if (container) {
        container.appendChild(clone);
      }
    } else {
      // If template is not loaded yet, wait and try again
      setTimeout(waitForTemplate, 100);
    }
  };

  waitForTemplate();
}