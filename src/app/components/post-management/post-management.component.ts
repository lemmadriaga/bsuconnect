import { Component, OnInit } from '@angular/core';
import { ForumService, Post } from '../../forum.service';

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.scss'],
})
export class PostManagementComponent implements OnInit {
  searchTerm = '';
  currentFilter = 'all';
  currentSort = 'newest';
  allPosts: Post[] = [];
  filteredPosts: Post[] = [];
  pendingPosts: Post[] = [];
  approvedPosts: Post[] = [];

  constructor(private forumService: ForumService) {}

  ngOnInit() {
    // Fetch all approved posts and apply initial filters
    this.forumService.getPosts().subscribe((posts) => {
      this.allPosts = posts;
      this.approvedPosts = posts.filter((post) => post.approved);
      this.applyFilters();
    });

    // Fetch only posts pending approval
    this.forumService.getPostsForApproval().subscribe((posts) => {
      this.pendingPosts = posts;
      this.applyFilters();
    });
  }

  onSearchChange(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.applyFilters();
  }

  onFilterChange(filter: string) {
    this.currentFilter = filter;
    this.applyFilters();
  }

  onSortChange(sort: string) {
    this.currentSort = sort;
    this.applyFilters();
  }

  approvePost(post: Post) {
    this.forumService.approvePost(post.id!).then(() => {
      post.approved = true;
      // Move post from pending to approved lists
      this.pendingPosts = this.pendingPosts.filter((p) => p.id !== post.id);
      this.approvedPosts.push(post);
      this.applyFilters();
    });
  }

  deletePost(post: Post) {
    this.forumService.deletePost(post.id!).then(() => {
      this.pendingPosts = this.pendingPosts.filter((p) => p.id !== post.id);
      this.approvedPosts = this.approvedPosts.filter((p) => p.id !== post.id);
      this.applyFilters();
    });
  }

  private applyFilters() {
    // Filter based on approval status
    let filtered =
      this.currentFilter === 'pending'
        ? [...this.pendingPosts]
        : this.currentFilter === 'approved'
        ? [...this.approvedPosts]
        : [...this.allPosts];

    // Apply search term
    if (this.searchTerm) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.content.toLowerCase().includes(searchLower) ||
          post.authorName.toLowerCase().includes(searchLower)
      );
    }

    // Apply sorting by timestamp
    filtered.sort((a, b) => {
      const dateA = new Date(a.timestamp).getTime();
      const dateB = new Date(b.timestamp).getTime();
      return this.currentSort === 'newest' ? dateB - dateA : dateA - dateB;
    });

    this.filteredPosts = filtered;
  }
}
