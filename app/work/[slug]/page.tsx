import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import WorkDetailFullWidth from '@/components/WorkDetailFullWidth';

interface WorkPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getWorkContent(slug: string) {
  // Map URL slugs to markdown file names
  const slugToFile: Record<string, string> = {
    'telexistence-inc': 'telexistence',
    'synamon-inc': 'synamon',
    'toyota-motor-corporation': 'toyota',
  };
  
  const filename = slugToFile[slug];
  if (!filename) {
    return null;
  }
  
  const filePath = path.join(process.cwd(), 'content', 'work', `${filename}.md`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content;
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  // Match the slugs that are generated in the main page
  return [
    { slug: 'telexistence-inc' },
    { slug: 'synamon-inc' },
    { slug: 'toyota-motor-corporation' },
  ];
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const content = await getWorkContent(slug);
  
  if (!content) {
    notFound();
  }

  const formattedSlug = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <WorkDetailFullWidth title={formattedSlug}>
      <MDXRemote source={content} />
    </WorkDetailFullWidth>
  );
}