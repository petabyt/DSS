#ifndef FITSFILESTAB_H
#define FITSFILESTAB_H

#include <QWidget>

namespace Ui {
class FitsFilesTab;
}

class FitsFilesTab : public QWidget
{
    Q_OBJECT

public:
    explicit FitsFilesTab(QWidget *parent = nullptr);
    ~FitsFilesTab();

private:
    Ui::FitsFilesTab *ui;
};

#endif // FITSFILESTAB_H
