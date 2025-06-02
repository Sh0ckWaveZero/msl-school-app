import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function UsersPage() {
  return (
    <div>
      <h1>Users</h1>
      <Table className="bg-background">
        <TableHeader>
          <TableRow className="border-border hover:bg-muted/50">
            <TableHead className="text-foreground">ชื่อ</TableHead>
            <TableHead className="text-foreground">อีเมล</TableHead>
            <TableHead className="text-foreground">สถานะ</TableHead>
            <TableHead className="text-foreground">การกระทำ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-border hover:bg-muted/50">
            <TableCell className="text-foreground">John Doe</TableCell>
            <TableCell className="text-foreground">john.doe@example.com</TableCell>
            <TableCell className="text-foreground">Active</TableCell>
            <TableCell className="text-foreground">
              <Button variant="outline" size="sm" className="border-input hover:bg-accent hover:text-accent-foreground">
                แก้ไข
              </Button>
              <Button variant="outline" size="sm" className="border-input hover:bg-accent hover:text-accent-foreground">
                ลบ
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="border-border hover:bg-muted/50">
            <TableCell className="text-foreground">Jane Smith</TableCell>
            <TableCell className="text-foreground">jane.smith@example.com</TableCell>
            <TableCell className="text-foreground">Inactive</TableCell>
            <TableCell className="text-foreground">
              <Button variant="outline" size="sm" className="border-input hover:bg-accent hover:text-accent-foreground">
                แก้ไข
              </Button>
              <Button variant="outline" size="sm" className="border-input hover:bg-accent hover:text-accent-foreground">
                ลบ
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
