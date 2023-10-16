import { Injectable } from '@nestjs/common';
import { CreateBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
  getBookmarks(userId: number) {
    return 'bookmarks';
  }

  getBookamrkById(userId: number, bookmarkId: number) {}

  createBookmark(userId: number, dto: CreateBookmarkDto) {}

  editBookmarkById(userId: number, dto: EditBookmarkDto) {}

  deleteBookmarkById(userId: number, bookmarkId: number) {}
}
