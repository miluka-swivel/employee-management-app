## A Nextjs front end project that manages employees.
The application manages employees through this frontend application, which has the capabilities to display employees in a grid view and a table view. In addition user has the capability to add employees, edit employees and delete employees.  

**Configurations**  
For the application to work accordingly, below configuration changes should be done.  
* **NEXT_PUBLIC_SERVICE_BASE_URL** - This should be the external API url that manages employees. This can be hosted in a different domain or in a different port in your local machine. Make sure to correctly configure this backend url
eg: - http://localhost:{PORT}/api   

**How to start application in development environment**  
After configuration changes first, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
