CREATE TABLE `products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`slug` text NOT NULL,
	`description` text,
	`image_url` text,
	`category` text,
	`downloads` text,
	`specifications` text
);
