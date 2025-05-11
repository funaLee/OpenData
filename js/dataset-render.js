function renderDatasetCard(containerSelector, dataset) {
  const template = document.getElementById('dataset-card-template');
  if (!template) return;

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

  document.querySelector(containerSelector).appendChild(clone);
}
