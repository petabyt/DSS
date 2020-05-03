#ifndef DROPFILESDLG_H
#define DROPFILESDLG_H

#include <QDialog>

namespace Ui {
class DropFilesDlg;
}

class DropFilesDlg : public QDialog
{
    Q_OBJECT

public:
    explicit DropFilesDlg(QWidget *parent = nullptr);
    ~DropFilesDlg();

private:
    Ui::DropFilesDlg *ui;
};

#endif // DROPFILESDLG_H
